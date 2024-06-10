export const getAllUsers = async () => {
  try {
    const url = `${process.env.API_URL}/users`;
    const res = await fetch(url);
    const data = res.json();
    return data;
  } catch (error) {
    console.log("error>>>>", error);
  }
};

export const getAllProducts = async () => {
  try {
    const url = `${process.env.API_URL}/products`;
    const res = await fetch(url);
    const data = res.json();
    return data;
  } catch (error) {
    console.log("error>>>>", error);
  }
};

export const getUserProducts = async (id: string) => {
  try {
    const url = `${process.env.API_URL}/products/${id}`;
    const res = await fetch(url);
    const data = res.json();
    return data;
  } catch (error) {
    console.log("error>>>>", error);
  }
};
