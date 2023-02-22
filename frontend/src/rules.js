const rules = {
	user: {
		static: [
		"ticket-options:deleteTicket",
		"sign-message:disable",
		"ticket-options:transferWhatsapp",
		"contacts-page:deleteContact",
			],
	},
	admin: {
		static: [
			"drawer-admin-items:view",
			"tickets-manager:showall",
			"sign-message:disable",
			"user-modal:editProfile",
			"user-modal:editQueues",
			"ticket-options:deleteTicket",
			"ticket-options:transferWhatsapp",
			"contacts-page:deleteContact",
		],
	},
};

export default rules;