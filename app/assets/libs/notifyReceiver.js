import firebase from 'react-native-firebase';

import Notify from "./notify";

export default async (message) => {
	// handle your message
	console.log('message: ', message);

	const {type} = message.data;

	await Notify.send({
		id    : message.messageId,
		title : message.title,
		body  : message.body,
		type  : type
	});

	return false;
}