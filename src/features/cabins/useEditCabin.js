import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createEditCabin} from "../../services/apiCabins.js";
import toast from "react-hot-toast";

export function useEditCabin() {
    const queryClient = useQueryClient();

    const {mutate: editCabin, isLoading: isEditing} = useMutation({
        // in React Query we can only pass one element to the mutationFn as
        // parameter. So the only argument we use is the object with newCabinData and id.

        mutationFn: ({newCabinData, editId}) => {
            return createEditCabin(newCabinData, editId)
        },
        onSuccess: () => {
            toast.success('Cabin successfully edited');
            queryClient.invalidateQueries({
                queryKey: ['cabins']
            });

        },
        onError: (err) => toast.error(err.message),
    });

    return {editCabin, isEditing};
}