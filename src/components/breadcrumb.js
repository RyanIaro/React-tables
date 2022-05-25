export function BreadCrumb(props){
    const { one , two } = props;
    return(
        <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item"><a href="index.html">{ one }</a></li>
            <li class="breadcrumb-item active">{ two }</li>
        </ol>
    );
}
