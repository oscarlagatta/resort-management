import supabase from "./supabase";

export async function getCabins() {
    const { data, cabins, error } = await supabase
        .from('cabins')
        .select('*');

    console.log(data);

    if (error) {
        console.error(error);
        throw new Error(`Cabins could not be loaded`)
    }

    return data;
}