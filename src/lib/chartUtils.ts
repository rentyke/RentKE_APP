// Tremor Raw chartColors [v0.1.0]

interface ColorConfig {
  bg: string;
  stroke: string;
  fill: string;
  text: string;
}

interface ChartColors {
  [key: string]: ColorConfig;
}

const chartColors: ChartColors = {
  blue: {
    bg: "bg-blue-500",
    stroke: "stroke-blue-500",
    fill: "fill-blue-500",
    text: "text-blue-500",
  },
  emerald: {
    bg: "bg-emerald-500",
    stroke: "stroke-emerald-500",
    fill: "fill-emerald-500",
    text: "text-emerald-500",
  },
  violet: {
    bg: "bg-violet-500",
    stroke: "stroke-violet-500",
    fill: "fill-violet-500",
    text: "text-violet-500",
  },
  amber: {
    bg: "bg-amber-500",
    stroke: "stroke-amber-500",
    fill: "fill-amber-500",
    text: "text-amber-500",
  },
  gray: {
    bg: "bg-gray-500",
    stroke: "stroke-gray-500",
    fill: "fill-gray-500",
    text: "text-gray-500",
  },
  cyan: {
    bg: "bg-cyan-500",
    stroke: "stroke-cyan-500",
    fill: "fill-cyan-500",
    text: "text-cyan-500",
  },
  pink: {
    bg: "bg-pink-500",
    stroke: "stroke-pink-500",
    fill: "fill-pink-500",
    text: "text-pink-500",
  },
  lime: {
    bg: "bg-lime-500",
    stroke: "stroke-lime-500",
    fill: "fill-lime-500",
    text: "text-lime-500",
  },
  fuchsia: {
    bg: "bg-fuchsia-500",
    stroke: "stroke-fuchsia-500",
    fill: "fill-fuchsia-500",
    text: "text-fuchsia-500",
  },
};

const AvailableChartColors: string[] = Object.keys(chartColors);

const constructCategoryColors = (categories: string[], colors: string[]): Map<string, string> => {
  const categoryColors = new Map<string, string>();
  categories.forEach((category, index) => {
    categoryColors.set(category, colors[index % colors.length]);
  });
  return categoryColors;
};

type ColorType = keyof ColorConfig;

const getColorClassName = (color: string, type: ColorType): string => {
  const fallbackColor: ColorConfig = {
    bg: "bg-gray-500",
    stroke: "stroke-gray-500",
    fill: "fill-gray-500",
    text: "text-gray-500",
  };
  return chartColors[color]?.[type] ?? fallbackColor[type];
};

// Tremor Raw getYAxisDomain [v0.0.0]

type DomainValue = number | "auto";

const getYAxisDomain = (
  autoMinValue: boolean,
  minValue?: number,
  maxValue?: number
): [DomainValue, DomainValue] => {
  const minDomain: DomainValue = autoMinValue ? "auto" : minValue ?? 0;
  const maxDomain: DomainValue = maxValue ?? "auto";
  return [minDomain, maxDomain];
};

// Tremor Raw hasOnlyOneValueForKey [v0.1.0]

function hasOnlyOneValueForKey<T extends object>(array: T[], keyToCheck: keyof T): boolean {
  const val: unknown[] = [];

  for (const obj of array) {
    if (Object.prototype.hasOwnProperty.call(obj, keyToCheck)) {
      val.push(obj[keyToCheck]);
      if (val.length > 1) {
        return false;
      }
    }
  }

  return true;
}

export {
  type ColorConfig,
  type ChartColors,
  type ColorType,
  type DomainValue,
  chartColors,
  AvailableChartColors,
  constructCategoryColors,
  getColorClassName,
  getYAxisDomain,
  hasOnlyOneValueForKey,
};