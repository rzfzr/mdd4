import ReactPrismEditor from "react-prism-editor";

export default function FavoritesPage() {


    let code='le code \n is big \n as big \n as my';
    return <div><h1>Editor</h1>
        <ReactPrismEditor
            language={'cpp'}
            theme={'dark'}
            code={code}
            lineNumber={true}
            readOnly={false}
            clipboard={false}
            changeCode={code => {
                // this.code=code
                // console.log(code)
            }}
        /></div>
}