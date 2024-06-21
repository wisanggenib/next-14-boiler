import React from 'react'

const useHooks = () => {
  const [isShowPassword, setIsShowPassword] = React.useState<Boolean>(false)
  const onClickEye = () => {
    console.log('asdasd')
    setIsShowPassword(!isShowPassword)
  }
  return {
    data: { isShowPassword },
    methods: { onClickEye },
  }
}

export default useHooks
