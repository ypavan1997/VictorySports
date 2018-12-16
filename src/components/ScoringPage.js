import React from 'react';
import {Divider, Header, Icon} from 'semantic-ui-react'
import ScoringBoard from "./ScoringBoard";
import Grid from "semantic-ui-react/dist/es/collections/Grid/Grid";
import Form from "semantic-ui-react/dist/es/collections/Form/Form";
import connect from "react-redux/es/connect/connect";


class ScoringPage extends React.Component {

    render() {
        const { match, currentActivity } = this.props;

        return (
            <Form>
                <Grid doubling >
                    <React.Fragment>
                        <Grid.Row centered>
                            <Grid.Column width={10}>
                            <Header as='h2' icon textAlign='center'>
                                <Icon name='trophy' circular />
                                <Header.Content>WOW Scoring</Header.Content>
                            </Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row centered>
                            <Grid.Column width={10}>
                                <Divider horizontal>
                                    <Header as='h4'>
                                        Hub ID {currentActivity.hubName} - {match.params.activityDate}
                                    </Header>
                                </Divider>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row centered>
                            <Grid.Column width={10}>
                                <ScoringBoard activity={currentActivity}/>
                            </Grid.Column>
                        </Grid.Row>
                    </React.Fragment>
                </Grid>
            </Form>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentActivity: state.openActivity.current
    }
}


export default connect(
    mapStateToProps,
    null
)(ScoringPage)
