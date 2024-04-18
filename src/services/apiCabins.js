import supabase, {supabaseUrl} from "./supabase";

export async function getCabins() {
    const {data, error} = await supabase
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
//
// export async function createEditCabin(newCabin, id) {
//
//     const hasImagePath =
//         newCabin.image?.startsWith?.(supabaseUrl);
//
//     // If the cabin name contain any slashes then supabase will
//     // create folders based on that; so we need to replace all '/'
//     const imageName = `${Math.random()}-${newCabin.image.name}`
//         .replaceAll("/", "");
//
//     const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
//
//     let query = supabase.from('cabins');
//
//     // A) CREATE a cabin
//     if (!id) {
//         query = query
//             .insert([{...newCabin, image: imagePath}]).select().single();
//
//
//         // if we want the returned object we add at the end
//         // .select().single();
//         console.log(`newCabin :: ${JSON.stringify(newCabin)}`);
//         console.log(`query :: ${JSON.stringify(query)}`);
//     }
//
//     // B) EDIT
//     if (id) {
//         // const { data: data1, error: error1 } = await supabase
//         //     .from('cabins')
//         //     .update({...newCabin, image: imagePath})
//         //     .eq('id', id)
//         //     .select()
//         query = query
//             .update({...newCabin, image: imagePath})
//             .eq('id', id)
//             .select();
//     }
//
//     const {data, error} = query;
//
//     if (error) {
//         console.error(error);
//         throw new Error(`Cabins could not be created`)
//     }
//
//     // Upload image
//     const {error: storageError} = await supabase
//         .storage
//         .from('cabin-images')
//         .upload(imageName, newCabin.image);
//
//
//     // Delete the cabin if was error uploading image
//     if (storageError) {
//
//         await supabase
//             .from('cabins')
//             .delete()
//             .eq("id", data.id);
//
//         throw new Error(`Cabins image could not be uploaded,
//         the cabin was not created`);
//     }
//
//     return data;
//
// }



export async function createEditCabin(newCabin, id) {

    // check if is new image or existing(checking the supabase url).
    // Also, newCabin.image might not be a string, and we won't be able to
    // call the function startsWith() so we do optional chaining.
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

    // If the cabin name contain any slashes then supabase will
    // create folders based on that; so we need to replace all '/'

    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
        "/",
        ""
    );

    const imagePath = hasImagePath
        ? newCabin.image
        : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    // 1. Create/edit cabin
    let query = supabase.from("cabins");

    // A) CREATE
    if (!id) {
        query = query
            .insert([{ ...newCabin, image: imagePath }])
    }

    // B) EDIT
    if (id) {
        query = query
            .update({ ...newCabin, image: imagePath })
            .eq("id", id);
    }

    const { data, error } = await query.select().single();

    if (error) {
        console.error(error);
        throw new Error("Cabin could not be created");
    }

    // 2. Upload image
    if (hasImagePath) return data;

    const { error: storageError } = await supabase.storage
        .from("cabin-images")
        .upload(imageName, newCabin.image);

    // 3. Delete the cabin IF there was an error uplaoding image
    if (storageError) {
        await supabase.from("cabins").delete().eq("id", data.id);
        console.error(storageError);
        throw new Error(
            "Cabin image could not be uploaded and the cabin was not created"
        );
    }

    return data;
}