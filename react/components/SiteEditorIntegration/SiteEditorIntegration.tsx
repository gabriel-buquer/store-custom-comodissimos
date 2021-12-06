import React from 'react'
import styles from './SiteEditorIntegration.css'
import { useCssHandles } from "vtex.css-handles"
import { useRuntime } from "vtex.render-runtime/index"

interface SiteEditorProps {
    image: string
    items: SiteEditorItems[]
}

interface SiteEditorItems {
    textoTopo: string
    imageItem: string
    imageItemMobile: string
}

const CSS_HANDLES = [
    'SiteEditor__container'
]

const SiteEditorIntegration = (props: SiteEditorProps) => {
    console.log(props)
    const {deviceInfo} = useRuntime();
    const cssHandles = useCssHandles(CSS_HANDLES)
    return (
        <div className={cssHandles.SiteEditor__container}>
            <img src={props.image} />
            <div className={styles.SiteEditor__boxItem}>
                {props?.items?.map((item: SiteEditorItems, i: number) => {
                    return (
                        <div className={styles.SiteEditor__item} key={i}>
                            <p>{item?.textoTopo}</p>
                            <img src={deviceInfo.isMobile ? item?.imageItemMobile : item?.imageItem} />
                        </div>
                    );
                })}
            </div>
            
        </div>
    )
}

SiteEditorIntegration.schema = {
    title: "Site Editor"
}

export { SiteEditorIntegration }
