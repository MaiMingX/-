import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecommandWrapper, RecommandItem } from '../style';
class Recommand extends Component {
    render() {
        return (
            <RecommandWrapper>
                {
                    this.props.list.map((item) => {
                        return <RecommandItem imgUrl={item.get('imgUrl')} key={item.get('id')}></RecommandItem>
                    })
                }
            </RecommandWrapper>
        )
    }
}
const mapState = (state) => ({
    list: state.getIn(['home', 'recommandList'])
})
export default connect(mapState, null)(Recommand);