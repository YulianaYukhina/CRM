import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getStudentListFiltersSelectedTroop, getTroopList } from '../../../../selectors/studentList'
import { fetchGetTroopList } from '../../../../redux/modules/studentList'


import { Container} from './styled'

class SidebarContent extends React.Component {

    componentDidMount() {
        var self = this;
        this.props.fetchGetTroopList();
    }

    render() {
        return (
            <Container>
                <h3 onClick={() => this.props.onClick('')}>Взвода</h3>
                {this.props.troop && (this.props.troop.map(ob => {
                    return (
                        <div
                            className={`TroopItem ${ob.id === this.props.selectedTroop ? ' selected' : ''}`}
                            onClick={() => this.props.onClick(ob.id)}
                        >
                            {ob.numberTroop}
                        </div>
                    )
                }))}
            </Container>
        );
    }
}

SidebarContent.props = {
    onClick: PropTypes.func.isReqired,
    selectedTroop: PropTypes.string,
    fetchGetTroopList: PropTypes.func,
}

const mapStateToProps = state => ({
    selectedTroop: getStudentListFiltersSelectedTroop(state),
    troop: getTroopList(state),
})

export default connect(mapStateToProps, { fetchGetTroopList })(SidebarContent)