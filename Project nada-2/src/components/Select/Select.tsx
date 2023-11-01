import {
	Text,
	Menu,
	HStack,
	MenuButton,
	MenuItem,
	MenuList,
	FormLabel,
	Box,
} from '@chakra-ui/react';
import type { CSSProperties } from 'react';
import React, { useMemo, useState } from 'react';
import { Icon } from 'components/Icon';
import { isObjEmpty } from 'utils/functions';

interface ISelect {
	label: string;
	value: string;
}

interface SelectInputProps {
	defaultValue?: string | string[];
	onChange: (data) => void;
	options: ISelect[];
	label?: string;
	style?: CSSProperties;
	isDisabled?: boolean;
}

const CustomSelect: React.FC<SelectInputProps> = ({
	label,
	onChange,
	options,
	style,
	defaultValue,
	isDisabled = false,
}) => {
	// const [selectedOptions, setSelectedOptions] = useState([]);
	const [selectedOption, setSelectedOption] = useState({} as ISelect);

	const handleOptionClick = (option): void => {
		setSelectedOption(option);
		onChange && onChange(option);
	};

	const findOptionByValue = (
		options: ISelect[],
		value: string | string[] | undefined,
	): ISelect | undefined => {
		return options.find(
			option =>
				option?.value?.toString()?.toLowerCase() ===
				value?.toString()?.toLowerCase(),
		);
	};

	const _defaultValue = useMemo(() => {
		if (!options) return 'Select';
		return findOptionByValue(options, defaultValue);
	}, [defaultValue, options]);

	return (
		<Box
			display='flex'
			alignItems={'center'}
			justifyContent='start'
			style={style}>
			{label && (
				<FormLabel display={'flex'} fontSize='fs-14'>
					{label}
				</FormLabel>
			)}
			<Menu>
				<MenuButton disabled={isDisabled}>
					<HStack alignItems={'center'}>
						<Text fontWeight='bold'>
							{!isObjEmpty(selectedOption)
								? selectedOption.label
								: typeof _defaultValue === 'string'
								? _defaultValue
								: _defaultValue?.label}
						</Text>
						<Icon fontSize='fs-10' displayName='dropdown-arrow-down' />
					</HStack>
				</MenuButton>
				<MenuList>
					{options.map(option => (
						<MenuItem
							key={option.value}
							onClick={(): void => handleOptionClick(option)}>
							<Text>{option.label}</Text>
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</Box>
	);
};

export default CustomSelect;
