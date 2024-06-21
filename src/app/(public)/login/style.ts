import tw from 'twin.macro'

export const Wrapper = tw.div`
    flex
    relative
    flex-col
    items-center
    [height:100vh]
    justify-center
`

export const WrapperAlert = tw.div`
    flex
    z-50
    absolute
    items-center
    justify-center
    
    [width:100vw]
    [height:100vh]
`
