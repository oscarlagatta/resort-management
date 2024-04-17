import supabase, {supabaseUrl} from "./supabase";

export async function getCabins() {
    const {data,  error} = await supabase
        .from('cabins')
        .select('*');

    console.log(data);

    if (error) {
        console.error(error);
        throw new Error(`Cabins could not be loaded`)
    }

    return data;
}

export async function deleteCabin(id) {
    const {data, error} = await supabase
        .from('cabins')
        .delete()
        .eq("id", id);

    if (error) {
        console.error(error);
        throw new Error(`Cabins could not be deleted`)
    }

    return data;

}

export async function createCabin(newCabin) {

    // If the cabin name contain any slashes then supabase will
    // create folders based on that
    const imageName = `${Math.random()}-${newCabin.image.name}`
        .replaceAll("/", "");

    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    const {data, error} = await supabase
        .from('cabins')
        .insert([{...newCabin, image: imagePath}]);


    if (error) {
        console.error(error);
        throw new Error(`Cabins could not be created`)
    }

    // Upload image
    const {error: storageError} = await supabase
        .storage
        .from('cabin-images')
        .upload(imageName, newCabin.image);


    // Delete the cabin if was error uploading image
    if (storageError) {

        await supabase
            .from('cabins')
            .delete()
            .eq("id", data.id);

        throw new Error(`Cabins image could not be uploaded, 
        the cabin was not created`);
    }

    return data;

}