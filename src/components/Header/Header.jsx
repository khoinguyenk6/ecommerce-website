import BoxIcon from "./BoxIcon/BoxIcon";
import Menu from "./Menu/Menu";
import { dataBoxIcon, dataMenu } from "./constans";
import styles from "./styles.module.scss";
import Logo from "@icons/images/logo.jpg"

function MyHeader() {
    const {containerBox, containerBoxIcon , containerMenu ,containerHeader} = styles;
    return ( 
    <div className={containerHeader}>
        <div className={containerBox}>
            <div className={containerBoxIcon}>
                {dataBoxIcon.map((item) =>{
                    return <BoxIcon type={item.type} href={item.href} />
                })}
            </div>
            <div className={containerMenu}>
                {dataMenu.slice(0,3).map((item) =>{
                    return <Menu content={item.content} href={item.href} />
                })}
            </div>
        </div>
        <div>
            <img src="@icons/images/logo.jpg" alt="" />
        </div>
        <div>khoi ben phai</div>
    </div> 
    );
}

export default MyHeader;