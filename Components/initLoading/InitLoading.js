import style from "../../styles/InitLoading.module.css";
export default function Loading(){
    return (<>
        <div className={style.wrapper}>
            <div className={style.mainContent}>
                <div className={style.relativeWrapper}>
                    <img className={style.Logo} src="/Assets/logo/logo.ico" ></img>
                    <h2 className={style.text}>Libraerity</h2>
                    <div className={style.circle}>
                    </div>
                </div>
            </div>
        </div>
    </>)
}