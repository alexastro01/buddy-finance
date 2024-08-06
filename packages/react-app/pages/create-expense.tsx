import AddExpense from '@/components/create-expense/AddExpense'
import React from 'react'
import { X } from 'lucide-react';
import { useRouter } from 'next/router';

const CreateExpense = () => {
    const router = useRouter();

    const handleClose = () => {
        router.back(); // or router.push('/') to go to the home page
    };

    return (


        <div>
            <AddExpense />
        </div>

    )
}

export default CreateExpense