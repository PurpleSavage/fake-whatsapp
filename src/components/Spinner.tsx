import style from '../cssmodules/spinner.module.css'
const Spinner = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-cente bg-slate-200 bg-opacity-50 rounded-lg">
        <div className={style.spinner}>
            <div className={style.doublebounce1}></div>
            <div className={style.doublebounce2}></div>
        </div>
    </div>
  )
}

export default Spinner