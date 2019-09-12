import React from 'react';
import './VideoInfoBox.scss';
import {Image, Button} from 'semantic-ui-react';

export class VideoInfoBox extends React.Component {
    /* add local state: collapsed  */
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
        };
    }
    
    
    render() {
let descriptionTextClass = 'collapsed';
let buttonTitle = 'Show More';
if(this.state.collapsed) {
    descriptionTextClass = 'expanded';
    buttonTitle = 'Show Less';
}

        return (
            <div className="video-info-box">
                <Image clasName="channel-image" src='http://via.placeholder.com/48x48' circular/>
                <div className='video-info'>
                    <div className='channel-name'>Channel Name</div>
                    <div className='video-pub-date'>Tuesday, June 25, 2019</div>
                    <Button color='youtube'>61.8k Subscribe</Button>

                    <div className='video-description'>
                        <div className={descriptionTextClass}>
                        <p>Aenean suscipit dapibus sollicitudin. Maecenas elementum imperdiet sapien at pellentesque. Quisque ornare rhoncus ex nec tristique. Integer massa ante, vehicula ut augue sed, tincidunt facilisis tellus. Sed augue tortor, dictum a ante sed, ultricies tincidunt tortor. Proin ultricies mi vel neque commodo mattis. Nullam neque ipsum, elementum in ipsum consectetur, gravida semper lectus. Curabitur at malesuada lacus, nec gravida diam. Nullam dignissim, odio sed mollis eleifend, felis turpis dictum urna, vel molestie neque nibh ut massa. Phasellus ut blandit ex. Phasellus erat leo, viverra sed commodo vitae, lacinia sit amet neque. Morbi eu dictum massa.</p>
                        <p>Duis pellentesque at quam sit amet posuere. Proin placerat, ante id ullamcorper malesuada, dui turpis bibendum ipsum, nec venenatis nisl urna vel erat. Suspendisse vestibulum risus dolor, luctus cursus tortor porta eu. Pellentesque scelerisque lectus dui, sit amet volutpat enim varius vitae. Ut ac hendrerit felis. </p>
                        <p>Vestibulum rutrum rhoncus magna sit amet tristique. Morbi nisi enim, suscipit ut varius a, congue a mauris. Sed nec lorem quis neque eleifend vehicula id vel nulla. Donec nec ipsum nec diam euismod congue quis vel turpis. Mauris eget semper quam. Curabitur vestibulum sed dolor vitae interdum.</p>
                        <p>Etiam vitae lorem non tellus sagittis ultrices sed et nisi. Phasellus blandit nec nisl in scelerisque. Ut ac purus quis neque placerat ullamcorper nec ut augue. Nam ut justo rutrum mauris lacinia tincidunt id ut purus. Integer ac efficitur est. </p>
                        <p>Proin elementum iaculis lacus, nec convallis felis dignissim et. Donec sed massa a tortor efficitur rhoncus sit amet sit amet ex. Vivamus consectetur commodo turpis sed egestas. Etiam non metus ut velit egestas congue ut sit amet erat. Maecenas id dui quis ex tempus sollicitudin in ut ante. Sed ullamcorper maximus mollis. Mauris risus nibh, dapibus ut ultricies vitae, tincidunt ac nisl.</p>
                        </div>
                    </div>

                    <Button compact onClick={this.onToggleCollapseButtonClick}>{buttonTitle}</Button>
                </div>
            </div>
        );
    }

    onToggleCollapseButtonClick = () => {
        /* forces component to rerender */
        this.setState((prevState) => {
            return{ 
                collapsed: !prevState.collapsed
            };
        });
    }
}