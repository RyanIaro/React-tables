export function CollapsedLink(props) {
    const { label , target , href } = props;
    return(
        <a class="nav-link collapsed" href={ href } data-bs-toggle="collapse" data-bs-target={ target } aria-expanded="false" aria-controls="collapseLayouts">
            <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
            { label }
            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
        </a>
    );
}