import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button'

const AlbumDetail = (props) => {
	const {
		thumbnailStyle,
		headerContentStyle,
		thumbnailContainerStyle,
		headerTextStyle,
		imageStyle
	} = styles;
	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image
						source={{ uri: props.album.thumbnail_image }}
						style={thumbnailStyle}
					/>
				</View>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{props.album.title}</Text>
					<Text>{props.album.artist}</Text>
					</View>
			</CardSection>

			<CardSection>
				<Image source={{ uri: props.album.image }} style={imageStyle} />
			</CardSection>

			<CardSection>
				<Button onPress={() => Linking.openURL(props.album.url)}>
					Buy Now
				</Button>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default AlbumDetail;
