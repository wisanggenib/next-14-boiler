import React from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useMutation } from '@apollo/client'

import { login } from '@/store/slices/authSlice'
import { LoginMutation } from '@/graphql/mutation/user'

const useHooks = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  //handle form
  const [isShowPassword, setIsShowPassword] = React.useState<boolean>(false)
  const onClickEye = () => {
    setIsShowPassword(!isShowPassword)
  }

  const [username, setUsername] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

  const handleTextChange = (type: 'password' | 'username', val: string) => {
    if (type === 'password') {
      return setPassword(val)
    } else {
      return setUsername(val)
    }
  }

  // handling error modal
  const [modalError, setModalError] = React.useState({
    isOpen: false,
    title: '',
    description: '',
  })

  const actionCloseModalError = () => {
    setModalError({
      ...modalError,
      isOpen: false,
    })
  }

  const actionOpenModalError = (title: string, description: string) => {
    setModalError({
      isOpen: true,
      title: title,
      description: description,
    })
  }

  //handling muttaion login
  const [actionLogin, { loading, error }] = useMutation(LoginMutation, {
    fetchPolicy: 'no-cache',
  })

  const handleButtonLogin = async () => {
    try {
      const { data } = await actionLogin({
        variables: {
          email: username,
          password: password,
        },
        fetchPolicy: 'no-cache',
      })
      console.log(data)

      if (data?.Auth?.Login?.isSuccess) {
        const payload = {
          ...data?.Auth?.Login?.data?.userData,
          token: data?.Auth?.Login?.data?.token,
        }

        if (data?.Auth?.Login?.data?.userData?.role === 'vendor') {
          dispatch(login(payload))
          router.push('/admin/dashboard')
        } else {
          dispatch(login(payload))
          router.push('/dashboard')
        }
        //
      } else {
        actionOpenModalError(
          'Something Went Wrong',
          data?.Auth?.Login?.message || 'Something Went Wrong'
        )
      }
    } catch (error: any) {
      actionOpenModalError(
        'Something Went Wrong',
        JSON.stringify(error?.message).replaceAll(`"`, ``) ||
          'Something Went Wrong'
      )
    }
  }

  return {
    data: { modalError, isShowPassword, username, password, loading },
    methods: {
      onClickEye,
      handleTextChange,
      handleButtonLogin,
      actionCloseModalError,
    },
  }
}

export default useHooks
