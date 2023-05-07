import './index.css'


const AppItem = (props) => {
    const {appsList} = props
    const {appId,appName,imageUrl,category} = appsList
    return(
        <div>
            <h1>AppItem</h1>
        </div>
    )
}

export default AppItem