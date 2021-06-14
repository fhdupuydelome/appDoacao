import AsyncStorage from "@react-native-async-storage/async-storage";

export interface alimentoProps {
  Nome: string;
  categoria?: string;
  id: string;
  quantidade?: number;
}

export interface StoragealimentoProps {
  [id: string]: {
    data: alimentoProps;
  };
}

export async function savealimento(alimento: alimentoProps): Promise<void> {
  try {
    const data = await AsyncStorage.getItem("@alimentomanager:alimentos");
    const oldalimentos = data ? (JSON.parse(data) as StoragealimentoProps) : {};

    const newalimento = {
      [alimento.id]: {
        data: alimento,
      },
    };

    await AsyncStorage.setItem(
      "@alimentomanager:alimentos",
      JSON.stringify({
        ...newalimento,
        ...oldalimentos,
      })
    );
  } catch (error) {
    throw new Error(error);
  }
}

export async function loadalimento(): Promise<alimentoProps[]> {
  try {
    const data = await AsyncStorage.getItem("@alimentomanager:alimentos");
    const alimentos = data ? (JSON.parse(data) as StoragealimentoProps) : {};

    return alimentos;
  } catch (error) {
    throw new Error(error);
  }
}

export async function removealimento(id: string): Promise<void> {
  const data = await AsyncStorage.getItem("@alimentomanager:alimentos");
  const alimentos = data ? (JSON.parse(data) as StoragealimentoProps) : {};

  delete alimentos[id];

  await AsyncStorage.setItem(
    "@alimentomanager:alimentos",
    JSON.stringify(alimentos)
  );
}
