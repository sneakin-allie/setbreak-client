import React from 'react';
import config from '../config';
import { withRouter } from 'react-router-dom';

class EditConcertForm extends React.Component {
    constructor(props) {
        super(props);

        this.date = React.createRef();
        this.artist = React.createRef();
        this.venue = React.createRef();
        this.songs = React.createRef();
        this.notes = React.createRef();
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(config.obj.API_ENDPOINT + `/api/concerts/${id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(results => {
                this.setState({
                    date: results.date,
                    artist: results.artist,
                    venue: results.venue,
                    songs: results.songs,
                    notes: results.notes
                })
            })
            .catch(error => this.setState({ error }))
    }

    handleUpdate = e => {
        e.preventDefault();
        const { id } = this.props.match.params;
        const updatedConcert = {
            date: this.date.current.value,
            artist: this.artist.current.value,
            venue: this.venue.current.value,
            songs: this.songs.current.value,
            notes: this.notes.current.value,
            id
        };

        fetch(config.obj.API_ENDPOINT + `/api/concerts/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedConcert),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(updatedConcert => {
                this.props.onUpdateConcert(updatedConcert)
                this.props.history.push("/list")
            })
            .catch(error => this.setState({ error }))
 
    }
    
    handleDelete = e => {
        e.preventDefault();
        const { id } = this.props.match.params;
        fetch(config.obj.API_ENDPOINT + `/api/concerts/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res
            })
            .then(this.props.history.push("/list"))
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const id = this.props.match.params.id;
        const currentConcert = this.props.concerts.find(concert => 
            (Number(concert.id) === Number(id))
        )

        return (
            <div className="edit-concert">
                <h3>Edit Concert</h3>
                    <form className="edit-concert-form">
                        <label htmlFor="date">Date:</label>
                        <input 
                            type="date" 
                            id="date" 
                            name="date"
                            defaultValue={currentConcert.date}
                            ref={this.date}
                        />
                        <br />
                        <label htmlFor="artist">Artist:</label>
                        <input 
                            type="text" 
                            id="artist" 
                            name="artist" 
                            defaultValue={currentConcert.artist}
                            ref={this.artist}
                        />
                        <br />
                        <label htmlFor="venue">Venue:</label>
                        <input 
                            type="text" 
                            id="venue" 
                            name="venue"
                            defaultValue={currentConcert.venue}
                            ref={this.venue} 
                        />
                        <br />
                        <label htmlFor="songs">Favorite songs:</label>
                        <input 
                            type="text" 
                            id="songs" 
                            name="songs" 
                            defaultValue={currentConcert.songs}
                            ref={this.songs}
                        />
                        <br />
                        <label htmlFor="notes">Notes:</label>
                        <textarea 
                            id="notes" 
                            name="notes"
                            defaultValue={currentConcert.notes}
                            ref={this.notes}>
                        </textarea>
                        <br />
                        <button 
                            onClick={this.handleUpdate}
                            type="button">
                            Update
                        </button>
                        <button
                            onClick={this.handleDelete}
                            type="button">
                            Delete
                        </button>
                    </form>
            </div>
        );
    }
}

export default withRouter(EditConcertForm);