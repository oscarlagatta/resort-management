import supabase from "./supabase.js";

export async function login({email, password}) {

    let {data, error} = await supabase
        .auth
        .signInWithPassword({
            email,
            password,
        })


    if (error ) throw new Error(error.message);

    return data;
}

export async function getCurrentUser() {
    const { data: session } = await supabase.auth.getSession()

    if (!session.session) return null;

    const { data, error } = await supabase.auth.getUser();

    console.log('User ', data?.user);

    if (error) throw new Error(error.message);
    return data?.user;
}