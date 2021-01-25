import React from 'react';
import CellsBord from './CellsBord';

type Props = React.ComponentProps<typeof CellsBord>
// const LifeGame: React.FC<Props> = ({ width, height, cells }) => <CellsBord width={width} height={height} cells={cells} />;
const LifeGame: React.FC<Props> = ({ lifGame }) => <CellsBord lifGame={lifGame} />;

export default LifeGame;
// class LifeGame extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: props.data,
//     };
//     this.refreshData = this.refleshData.bind(this);
//     this.handleBtn = this.handleBtn.bind(this);
//   }

//   refleshData() {
//     this.setState((state, props) => ({
//       data: CalcHelper.cellsOfLife(state.data),
//     }));
//   }

//   handleBtn(data) {
//     this.setState(() => ({
//       data,
//     }));
//   }

//   componentDidMount() {
//     setInterval(() => { this.refleshData(); }, 1000);
//   }

//   render() {
//     return (
//       <div className="lifegame">
//         <Cells data={this.state.data} />
//         <SettingsArea onBtn={this.handleBtn} />
//       </div>
//     );
//   }
// }
