import style from './Members.module.css'

//components
import Pathway from './Pathway/Pathway'
import InnerCircle from './InnerCircle/InnerCircle'


const Members = () => {
  return (
    <div className={style.members}>
      <InnerCircle />
      <Pathway />
    </div>
  )
}

export default Members