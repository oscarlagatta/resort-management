import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import {useForm} from "react-hook-form";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createEditCabin} from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow.jsx";


function CreateCabinForm({cabinToEdit = {}}) {

    // grab values out of the cabinToEdit prop
    const {id: editId, ...editValues} = cabinToEdit;

    // If there is an editId it will then be converted to True
    const isEditSession = Boolean(editId);

    const {
        reset, register, handleSubmit, getValues,
        formState
    } = useForm({
        defaultValues: isEditSession ? editValues : {}
    });

    const queryClient = useQueryClient();

    const {mutate: createCabin, isLoading: isCreating} = useMutation({
        mutationFn: createEditCabin,
        onSuccess: () => {
            toast.success('New cabin successfully created');
            queryClient.invalidateQueries({
                queryKey: ['cabins']
            });
            reset();
        },
        onError: (err) => toast.error(err.message),
    })


    const {mutate: editCabin, isLoading: isEditing} = useMutation({
        mutationFn: ({ newCabinData, id }) => {
            return createEditCabin(newCabinData, editId)},
        onSuccess: () => {
            toast.success('Cabin successfully edited');
            queryClient.invalidateQueries({
                queryKey: ['cabins']
            });
            reset();
        },
        onError: (err) => toast.error(err.message),
    });


    const isWorking = isCreating || isEditing;


    const {errors} = formState;
    console.log(errors)

    function onSubmit(data) {

        console.log(`data ${JSON.stringify(data)}`);
        const image = typeof data.image === 'string' ? data.image : data.image[0];

        if (isEditSession) {
            editCabin({newCabinData: {...data, image}, editId});
        } else createCabin({...data, image: data.image[0]});
    }

    function onError(errors) {
        console.log('errors', errors);
    }


    return (<Form onSubmit={handleSubmit(onSubmit, onError)}>

        <FormRow label="Cabin name" error={errors?.name?.message}>
            <Input
                type="text"
                id="name"
                disabled={isWorking}
                {...register("name", {
                    required: 'This field is required'
                })}
            />
        </FormRow>
        <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
            <Input
                type="number"
                id="maxCapacity"
                disabled={isWorking}

                {...register("maxCapacity", {
                    required: 'This field is required',
                    min: {
                        value: 1,
                        message: 'Capacity should be at least 1'
                    }
                })}/>
        </FormRow>

        <FormRow label="Regular price" error={errors?.regularPrice?.message}>
            <Input
                type="number"
                id="regularPrice"
                disabled={isWorking}
                {...register("regularPrice", {
                    required: 'This field is required',
                    min: {
                        value: 1,
                        message: 'Capacity should be at least 1'
                    }
                })}/>
        </FormRow>
        <FormRow label="Discount" error={errors?.discount?.message}>
            <Input
                type="number"
                id="discount"
                disabled={isWorking}
                defaultValue={0}
                {...register("discount", {
                    required: 'This field is required',
                    validate: (value) => value <= getValues().regularPrice || 'Discount should be less than regular price',
                })}/>
        </FormRow>
        <FormRow label="Description for website" error={errors?.description?.message}>
            <Textarea
                type="number"
                id="description"
                disabled={isWorking}
                defaultValue=""
                {...register("description", {
                    required: 'This field is required'
                })}
            />
        </FormRow>

        <FormRow label="Cabin photo">
            <FileInput
                id="image"
                accept="image/*"

                {...register("image", {
                    required: isEditSession ? false : 'This field is required'
                })}
            />
        </FormRow>

        <FormRow>
            {/* type is an HTML attribute! */}
            <Button variation="secondary" type="reset">
                Cancel
            </Button>
            <Button disabled={isWorking}>{
                isEditSession ? 'Update Cabin' : 'Create New Cabin'
            }
            </Button>
        </FormRow>
    </Form>);
}

export default CreateCabinForm;
