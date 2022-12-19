import React from 'react';

export const SuccessModal = ({ show, text }) => {
	if (!show) {
		return null;
	}
	return (
		<div
			className="bg-green-100 rounded-lg text-base text-green-700 py-2 px-2 mb-7 mr-5 inline-flex items-center w-[231px] fixed h-12 bottom-0 left-3/4"
			role="alert"
		>
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fas"
				data-icon="check-circle"
				className="w-4 h-4 mr-2 fill-current"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
			>
				<path
					fill="currentColor"
					d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
				/>
			</svg>
			{text}
		</div>
	);
};
