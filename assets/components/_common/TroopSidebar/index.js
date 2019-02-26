import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Sidebar from 'react-sidebar'
import SVGIcon from '../elements/SVGIcon'
import SidebarContent from './SidebarContent'
import { Container, SidebarButton } from './styled'

import { fetchGetStudentListData, fetchSetStudentListFiltersSelectTroop, fetchResetStudentListFiltersValue } from '../../../redux/modules/studentList'

class TroopSidebar extends React.Component {
    state = {
        sidebarOpen: false,
    }

    selectTroop = async id => {
        await this.props.fetchSetStudentListFiltersSelectTroop(id);
        await this.props.fetchResetStudentListFiltersValue({}); // сбросил все фильтры
        this.props.fetchGetStudentListData();
        this.toggleSideBar();
    }

    toggleSideBar = () => {
        this.setState(prevState => ({
            sidebarOpen: !prevState.sidebarOpen,
        }))
    }

    render() {
        return (
            <Container>
                <Sidebar
                    sidebar={<SidebarContent onClick={this.selectTroop} />}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.toggleSideBar}
                    styles={{ sidebar: { background: "white" } }}
                    sidebarClassName="TroopSidebar"
                >
                    <SidebarButton onClick={this.toggleSideBar}>
                        <SVGIcon name="rightArrowsCouple" />
                    </SidebarButton>
                </Sidebar>
            </Container>
        );
    }
}

TroopSidebar.props = {
    fetchGetStudentListData: PropTypes.func,
    fetchSetStudentListFiltersSelectTroop: PropTypes.func,
    fetchResetStudentListFiltersValue: PropTypes.func,
}

export default connect(null, { fetchGetStudentListData, fetchSetStudentListFiltersSelectTroop, fetchResetStudentListFiltersValue })(TroopSidebar)