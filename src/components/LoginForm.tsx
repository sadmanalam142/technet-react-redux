'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useForm } from 'react-hook-form';
import { loginUser } from '@/redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import {useEffect} from 'react'

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface ISignUpFormInputs {
  email: string;
  password: string;
}

export function LoginForm({ className, ...props }: UserAuthFormProps) {
  const {user, isLoading} = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpFormInputs>()

  const onSubmit = (data: ISignUpFormInputs) => {
    dispatch(loginUser({email: data.email, password: data.password}))
  }

  useEffect(() => {
    if(user.email && !isLoading){
      navigate('/')
    }
  }, [user.email, isLoading])

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              {...register('email', { required: true })}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <Input
              id="password"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              {...register('password', { required: true })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <Button>
            Login with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button"> 
      GitHub
      </Button>
    </div>
  );
}
