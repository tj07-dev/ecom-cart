import { Dispatch, ReactNode, SetStateAction, useEffect } from 'react';
import classes from './Toast.module.scss'

type Props = {
    /**
 * This prop control the visibility of Toast Componenet.
 */
    open: boolean;
    /**
 * Triggers the open and close functionality.
 */
    setOpen: Dispatch<SetStateAction<boolean>>
    /**
 * Pre-defined theme as per the message.
 */
    theme: 'success' | 'fail' | 'warn' | 'info' | string

    /**
 * Message content.
 */

    children: ReactNode
}


/**
 * Primary UI component for user interaction
 */

const Toast = (props: Props) => {
    const { theme } = props
    useEffect(
        () => {
            const timeout = setTimeout(() => { props.setOpen(false) }, 2000)
            return () => {
                clearTimeout(timeout)
            }
        }, [props.open, props.setOpen])
    return props.open ? (
        <div className={classes[theme]}>
            <div className={classes.iconContainer}>
            </div>
            <p className={classes.message}>{props.children}</p>
            <span className={classes.close} onClick={() => props.setOpen(false)}>
                &times;
            </span>

        </div>
    ) : <></>
}
export default Toast;