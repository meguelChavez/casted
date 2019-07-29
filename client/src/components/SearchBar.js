import React, { Component } from 'react';
import LoadingBtn from './LoadingBtn';
import {
    InputGroup,
    // InputGroupButtonDropdown,
    Input,
    Button,
    Form,
    FormGroup,
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
            <Form inline>
                {/* <FormGroup> */}
                <Input
                    value={this.props.keyword}
                    name="searchInput"
                    bsSize="lg"
                    className='col-md-10'
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
                {/* </FormGroup> */}
                {this.props.loading ? <LoadingBtn /> :
                    <Button
                        color='primary'
                        ref="btn"
                        className="ml-3 "
                        type='subit'
                        size='lg'
                        onClick={this.props.handleSearch}
                    >
                        Search
                        </Button>
                }

            </Form>
        );
    }
}

export default SearchBar;