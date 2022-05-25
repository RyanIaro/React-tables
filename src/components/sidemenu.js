export function SideMenu(props){
    const { href , label , className} = props;
    return(
        <a class="nav-link" href={href}>
            <div class="sb-nav-link-icon"><i class={className}></i></div>
            {label}
        </a>
    );
}