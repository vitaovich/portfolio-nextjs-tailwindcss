"use client"
import { useForm } from 'react-hook-form';

function SimpleForm() {
    const {
        register, handleSubmit, formState: { errors },
    } = useForm();

    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <label>
                First Name:
                <input {...register('firstName')} className="border" />
            </label>
            <label>
                Last Name:
                <input {...register('lastName', { required: true })} className="border" />
            </label>
            {errors.lastName && <p>Last name is required.</p>}
            <label>
                Age:
                <input {...register('age', { pattern: /\d+/ })} className="border" />
            </label>
            {errors.age && <p>Please enter number for age.</p>}
            <input type="submit" />
        </form>
    );
}

export default SimpleForm;