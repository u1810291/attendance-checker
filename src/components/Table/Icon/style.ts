import styled from 'styled-components'
import Checked from '../../../assets/icons/checked.png'
import Crossed from '../../../assets/icons/cross.png'

export const Container = styled.div``

export const IconWrapper = styled.img`
  background: url(${({ type }: any) => (type === 'yes' ? Checked : Crossed)});
`
