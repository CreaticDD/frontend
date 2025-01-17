import type { LovelaceBadgeConfig } from "./badge";
import type { LovelaceCardConfig } from "./card";
import type { LovelaceSectionRawConfig } from "./section";
import type { LovelaceStrategyConfig } from "./strategy";

export interface ShowViewConfig {
  user?: string;
}

interface LovelaceViewBackgroundConfig {
  image?: string;
}

export interface LovelaceBaseViewConfig {
  index?: number;
  title?: string;
  path?: string;
  icon?: string;
  theme?: string;
  panel?: boolean;
  background?: string | LovelaceViewBackgroundConfig;
  visible?: boolean | ShowViewConfig[];
  subview?: boolean;
  back_path?: string;
  max_columns?: number; // Only used for section view, it should move to a section view config type when the views will have dedicated editor.
  min_column_width?: number; // Only used for section view, it should move to a section view config type when the views will have dedicated editor.
}

export interface LovelaceViewConfig extends LovelaceBaseViewConfig {
  type?: string;
  badges?: Array<string | LovelaceBadgeConfig>;
  cards?: LovelaceCardConfig[];
  sections?: LovelaceSectionRawConfig[];
}

export interface LovelaceStrategyViewConfig extends LovelaceBaseViewConfig {
  strategy: LovelaceStrategyConfig;
}

export type LovelaceViewRawConfig =
  | LovelaceViewConfig
  | LovelaceStrategyViewConfig;

export function isStrategyView(
  view: LovelaceViewRawConfig
): view is LovelaceStrategyViewConfig {
  return "strategy" in view;
}
