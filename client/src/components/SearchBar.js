import React, { Component } from 'react';
import LoadingBtn from './LoadingBtn';
import {
    InputGroup,
    // InputGroupButtonDropdown,
    Input,
    Button,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem
} from 'reactstrap';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            splitButtonOpen: false
        };
    }

    toggleDropDown = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    toggleSplit = () => {
        this.setState({
            splitButtonOpen: !this.state.splitButtonOpen
        });
    }

    render() {
        return (
            <div>
                <InputGroup>
                    <Input
                        value={this.props.keyword}
                        name="searchInput"
                        onChange={this.props.handleInputChange}
                        placeholder="Search Movie By Title"
                    />
                    {/* <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                        <DropdownToggle className="btn-success" caret>
                            {this.props.searchBy ? this.props.searchBy : "Search By"}
                        </DropdownToggle>
                        <DropdownMenu
                            modifiers={{
                                setMaxHeight: {
                                    enabled: true,
                                    order: 890,
                                    fn: (data) => {
                                        return {
                                            ...data,
                                            styles: {
                                                ...data.styles,
                                                overflow: 'auto',
                                                maxHeight: 100,
                                            },
                                        };
                                    },
                                },
                            }}
                        >
                            {this.props.searchOptions.map((element, index) => (
                                < DropdownItem
                                    key={index}
                                    name="searchBy"
                                    value={element}
                                    onClick={this.props.handleInputChange}>
                                    {element}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </InputGroupButtonDropdown> */}
                    {this.props.loading ? <LoadingBtn /> :
                        <Button
                            color='primary'
                            ref="btn"
                            className="ml-3"
                            onClick={this.props.handleSearch}
                        >
                            Search
                        </Button>
                    }
                </InputGroup>
            </div>
        );
    }
}

export default SearchBar;