import React from "react";
import { Input, Button, List } from "antd";
const AListUI = (props) =>{
    return (
        <div>
        <div style={{ marginTop: "10px", marginLeft: "10px" }}>
          <Input
            placeholder="TodoList"
            onChange={props.inputChange}
            value={props.inputValue}
            style={{ marginRight: "10px", width: "300px" }}
          />
          <Button onClick={props.addItem} type="primary">
            提交
          </Button>
        </div>
        <div>
          <List
            bordered
            dataSource={props.list}
            renderItem={(item, index) => (
              <List.Item
                onClick={() => {
                  props.delItem(index);
                }}
              >
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    )
}
// class AListUI extends Component {
//   render() {
//     return (
//       <div>
//         <div style={{ marginTop: "10px", marginLeft: "10px" }}>
//           <Input
//             placeholder="TodoList"
//             onChange={this.props.inputChange}
//             value={this.props.inputValue}
//             style={{ marginRight: "10px", width: "300px" }}
//           />
//           <Button onClick={this.props.addItem} type="primary">
//             提交
//           </Button>
//         </div>
//         <div>
//           <List
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item, index) => (
//               <List.Item
//                 onClick={() => {
//                   this.props.delItem(index);
//                 }}
//               >
//                 {item}
//               </List.Item>
//             )}
//           />
//         </div>
//       </div>
//     );
//   }
// }
export default AListUI;
