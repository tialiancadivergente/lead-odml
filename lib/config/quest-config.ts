export const DEFAULT_QUEST_FORM_VERSION_ID =
  "6ae28205-2f33-4ddc-acba-26cf4f4321d3";

const QUEST_WHATSAPP_URL_BY_TEMPERATURE = {
  f: "https://redirects.aliancadivergente.com.br/grupovip",
  org: "https://redirects.aliancadivergente.com.br/grupovip",
  m: "https://redirects.aliancadivergente.com.br/grupovip",
  q: "https://redirects.aliancadivergente.com.br/grupovip",
} as const;

type QuestTesteTemperatureKey = keyof typeof QUEST_WHATSAPP_URL_BY_TEMPERATURE;

export function resolveQuestTesteWhatsappUrl(temperature: string): string {
  const normalizedTemperature = temperature.toLowerCase().trim();
  const validKeys = Object.keys(
    QUEST_WHATSAPP_URL_BY_TEMPERATURE
  ) as QuestTesteTemperatureKey[];

  const resolvedKey = validKeys.includes(normalizedTemperature as QuestTesteTemperatureKey)
    ? (normalizedTemperature as QuestTesteTemperatureKey)
    : "f";

  return QUEST_WHATSAPP_URL_BY_TEMPERATURE[resolvedKey];
}
