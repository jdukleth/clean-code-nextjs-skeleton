import { Box } from '@radix-ui/themes'
import { Centered } from 'components/radix-ui/Centered'
import css from './Skeleton.module.scss'

export const Skeleton = ({ width, height }) => {
  const dimensions = {
    width: width ?? '100%',
    height: height ?? '100px'
  }

  return (
    <Box className={css.skeleton} style={dimensions} />
  )
}
