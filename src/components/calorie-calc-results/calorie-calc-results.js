import React from 'react';
import { translate } from '../translations';
import { useSelector } from 'react-redux';

// Рассчет массы тела без жира
const LeanBodyMass = (weight, fatPercentage) => {
  return weight * (1 - fatPercentage / 100);
};

// Формула основного обмена веществ
const BasicMetabolism = (gender, leanBodyMass, weight, height, age) => {
  if (leanBodyMass > 0) {
    return 370 + (21.6 * leanBodyMass); // Формула Katch-McArdle
  }

  // Формула Mifflin-St Jeor
  if (gender === 'male') {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  } else if (gender === 'female') {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  } else {
    return 0;
  }
};

// Умножение BMR на уровень активности
const MaintenanceCalories = (bmr, activity) => {
  const activityMultiplier = {
    sedentary: 1.2,
    moderate: 1.375,
    medium: 1.55,
    high: 1.725,
    veryHigh: 1.9,
  };

  return bmr * (activityMultiplier[activity] || 1);
};

// Корректировка калорий для целей
const AdjustGoal = (maintenanceCalories, goal) => {
  if (goal === 'cut') {
    return maintenanceCalories * 0.75; // Похудение
  } else if (goal === 'bulk') {
    return maintenanceCalories * 1.15; // Набор массы
  } else {
    return maintenanceCalories; // Поддержание
  }
};

const Macronutrients = (calories, leanBodyMass, goal) => {
  // Задаем значения в зависимости от цели
  const proteinPerKg = goal === 'cut' ? 2.2 : goal === 'bulk' ? 1.8 : 1.6; // г белка на 1 кг LBM
  const fatPerKg = 0.8; // г жиров на 1 кг LBM (можно настроить)

  // Рассчет белков и жиров
  const protein = proteinPerKg * leanBodyMass; // в граммах
  const fat = fatPerKg * leanBodyMass; // в граммах

  // Оставшиеся калории на углеводы
  const proteinCalories = protein * 4; // 1 г белка = 4 ккал
  const fatCalories = fat * 9; // 1 г жира = 9 ккал
  const remainingCalories = calories - (proteinCalories + fatCalories);

  const carbs = remainingCalories / 4; // 1 г углеводов = 4 ккал

  return { protein, fat, carbs };
};

// Рассчет воды
const WaterIntake = (weight) => {
  return weight * 35; // 35 мл воды на килограмм веса
};

// Рассчет соли
const SaltIntake = (calories) => {
  return calories / 2000 * 6; // 6 г соли на 2000 ккал
};

// Рассчет кофеина
const CaffeineIntake = (weight) => {
  return weight * 3; // 3 мг кофеина на килограмм веса
};

// Рассчет клетчатки
const FiberIntake = (calories) => {
  return calories / 1000 * 14; // 14 г клетчатки на 1000 ккал
};

const CalorieCalcResults = () => {

  const lang = useSelector(state => state.language.lang);
  const formData = useSelector(state => state.formData);

  const { gender, weight, height, age, activity, goal, fatPercentage } = formData;

  const leanBodyMass = LeanBodyMass(weight, fatPercentage);

  const bmr = BasicMetabolism(gender, leanBodyMass, weight, height, age);

  const maintenanceCalories = MaintenanceCalories(bmr, activity);

  const targetCalories = AdjustGoal(maintenanceCalories, goal);

  const { protein, fat, carbs } = Macronutrients(targetCalories, leanBodyMass, goal);
  const water = WaterIntake(weight);
  const salt = SaltIntake(targetCalories);
  const caffeine = CaffeineIntake(weight);
  const fiber = FiberIntake(targetCalories);

  

  return (
    <div className="w-50 offset-3 mt-3">
      <p><strong>{translate('goal', lang)}</strong> {translate(goal, lang)}</p>
      <p><strong>{translate('basicMetabolism', lang)}</strong> {Math.round(bmr)}</p>
      <p><strong>{translate('сalorieForGoal', lang)}</strong> {Math.round(targetCalories)}</p>
      <p><strong>{translate('leanMass', lang)}</strong> {Math.round(leanBodyMass)} {translate('kg', lang)}</p>
      <hr />
      <p><strong>{translate('macros', lang)}</strong></p>
      <ul>
        <li>{translate('proteins', lang)} {Math.round(protein)} {translate('g', lang)}</li>
        <li>{translate('fats', lang)} {Math.round(fat)} {translate('g', lang)}</li>
        <li>{translate('carbs', lang)} {Math.round(carbs)} {translate('g', lang)}</li>
      </ul>
      <hr />
      <p><strong>{translate('recommended', lang)}</strong></p>
      <ul>
        <li>{translate('water', lang)} {Math.round(water)} {translate('ml', lang)}</li>
        <li>{translate('salt', lang)} {Math.round(salt)} {translate('g', lang)}</li>
        <li>{translate('caffeine', lang)} {Math.round(caffeine)} {translate('mg', lang)}</li>
        <li>{translate('fibers', lang)} {Math.round(fiber)} {translate('g', lang)}</li>
      </ul>
    </div>
  );
};

export default CalorieCalcResults;
