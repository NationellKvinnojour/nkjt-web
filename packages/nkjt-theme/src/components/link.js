import React from "react"
import { connect, useConnect } from "frontity"
import Link from "@frontity/components/link"

const NkjtLink = ({ children, ...props }) => {
    const { state, actions } = useConnect

    const onClick = () => {
        if(state.theme.isMobileMenuOpen) {
            actions.theme.closeMobileMenu()
        }
    }
    return (
        <Link {...props} onClick={onClick}>
            {children}
        </Link>
    )
}

export default connect(NkjtLink, {injectProps: false})
