
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSmartDescription = async (productName: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-lite-latest',
      contents: `Escribe una descripción publicitaria corta y elegante para un producto de neón llamado "${productName}". Máximo 20 palabras.`,
    });
    return response.text?.trim() || '';
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Letrero de neón de alta calidad con acabado profesional.";
  }
};

export const suggestPrice = async (cost: number, margin: number, productName: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-lite-latest',
      contents: `Sugiere un precio de venta para un producto de neón que cuesta fabricar $${cost} con un margen deseado del ${margin}%. Nombre del producto: ${productName}. Devuelve solo el número sugerido.`,
    });
    const suggested = parseFloat(response.text?.replace(/[^0-9.]/g, '') || '0');
    return isNaN(suggested) ? cost * (1 + margin / 100) : suggested;
  } catch (error) {
    return cost * (1 + margin / 100);
  }
};

export const analyzeHistory = async (movements: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-lite-latest',
      contents: `Analiza estos movimientos financieros y dame un consejo de 1 frase para mejorar el negocio: ${movements}`,
    });
    return response.text?.trim() || "Mantén un buen control de tus gastos operativos.";
  } catch (error) {
    return "Optimiza tus compras de materiales para mejorar el margen.";
  }
};
