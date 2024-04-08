"use client";

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
const page = () => {
    const router = useRouter();
    const [input, setInput] = useState<string>('');

    const { } = useMutation({
        mutationFn: async () => {

            const payload = {

            }
            const { data } = await axios.post('/api/subreddit', payload);
        }
    });

    return (
        <div className='container flex items-center h-full max-w-3xl mx-auto'>
            <div className='relative bg-white w-full h-fit p-4 space-y-6 rounded-lg'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-xl font-semibold'>
                        Create a Community
                    </h1>
                </div>
                <hr className='bg-zinc-500 h-px' />
                <div>
                    <p className='text-lg font-medium'>name</p>
                    <p className='text-xs pb-2'>Community name including capitalization cannot be changed</p>

                    <div className='relative'>
                        <p className='absolute text-sm left-0 inset-y-0 w-8
                 grid place-items-center text-zinc-400'>r/</p>

                        <Input value={input} onChange={(e) => setInput(e.target.value)} className='pl-6' />
                    </div>
                </div>

                <div className='flex justify-end gap-4'>
                    <Button variant="subtle" onClick={() => {
                        router.back();
                    }}>
                        Cancel
                    </Button>
                    <Button>
                        Create
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default page