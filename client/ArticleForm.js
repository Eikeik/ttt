import React from 'react';
import { Label, Form, Input, Button, Radio, Checkbox, Messages, Container, Divider, Dropdown, Header, Segment, Group, Table, Flag } from 'semantic-ui-react'
import { Articles } from '../imports/Article';
import DropdownDivider from './DropdownDivider'
import DropdownItem from './DropdownItem'
import DropdownHeader from './DropdownHeader'
import DropdownMenu from './DropdownMenu'
import DropdownSearchInput from './DropdownSearchInput'

export default class ArticleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ptc: false,
            thematic_focus: '',
            topic: '',
            location: '',
            content: '',
            regref: '',
            genre: '',
            keywords: '',
            event_time: '',
            topstory: false,
            lifetime: '',
            prio: '',
            date_published: '',
            lang: '',
            date_created: '',
            title: '',
            desc: '',
            author: '',
            likes: '',
            _id: '',
            value: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

    }

    handleChange(event, type) {
        let s = {};
        s[type] = event.target.value;
        this.setState(s);
    }

    handleSubmit(event) {
        Articles.insert({
            ptc: this.state.ptc,
            thematic_focus: this.state.thematic_focus,
            topic: this.state.topic,
            location: this.state.location,
            content: this.state.content,
            regref: this.state.regref,
            genre: this.state.genre,
            keywords: this.state.keywords,
            event_time: this.state.event_time,
            topstory: this.state.false.topstory,
            lifetime: this.state.lifetime,
            prio: this.state.prio,
            date_published: this.state.date_published,
            lang: this.state.lang,
            date_created: this.state.date_created,
            title: this.state.title,
            desc: this.state.desc,
            author: this.state.author,
            dateCreated: "15.09.2019",
            likes: this.state.likes,
            _id: this.state._id,
            value: this.state.value
        });

        console.log('A title was submitted: ' + this.state.title);
        console.log('A desc was submitted: ' + this.state.desc);
        console.log('A author was submitted: ' + this.state.author);

        event.preventDefault();
    }


    handleDelete(event) {
        // Articles.splice(article, 0);
        // this.setState({deleteArray: articles});
        this.props.articles.splice(this.props.key, 1);
        this.setState({
            deleteArray: articles
        });
    }



    render() {
        return (
            <Form>
        <Form.Field>
          <label>Title:</label>
          <input placeholder='title' value={this.state.title} onChange={(event) => {this.handleChange(event, "title")}} />
        </Form.Field>
        <Form.Field>
          <label>Description:</label>
          <input placeholder='description' value={this.state.description} onChange= {(event) => {this.handleChange(event, "desc")}} />
        </Form.Field>
        <Form.Field>
          <label>Author:</label>
          <input placeholder='author' value={this.state.user} onChange={(event) => {this.handleChange(event, "author")}} />
        </Form.Field>

        <Form.Field>
          <label>Profile Topic Content</label>
          <input
            type= "checkbox"
            label='Profile Topic Content'
            checked={this.state.checked}
            onChange={this.handleInputChange}
          />
        </Form.Field>


        <Form.Field>
          <label>Top Story</label>
          <input
            type= "checkbox"
            label='Profile Topic Content'
            checked={this.state.checked}
            onChange={this.handleInputChange}
          />
        </Form.Field>


   <div className="ui form">
    <div className="inline fields">
       <label>Priority:</label>

        <div className="field">
        <div className="ui radio checkbox">
        
            <input
            type= "checkbox"
            label='Breaking'
            value="breaking"
            checked={this.state.checked}
            onChange={this.handleInputChange}
            />
            <label>Breaking</label>
          </div>
      </div>

        <div className="field">
          <div className="ui radio checkbox">
                      
            <input
            type= "checkbox"
            label='Exclusive'
            value="exclusive"
            checked={this.state.checked}
            onChange={this.handleInputChange}
            />
            <label>Exclusive</label>
            </div>
      </div>

        <div className="field">
          <div className="ui radio checkbox">
            
            <input
            type= "checkbox"
            label='High'
            value="high"
            checked={this.state.checked}
            onChange={this.handleInputChange}
            />
            <label>High</label>
            </div>
      </div>

    <div className="field">
          <div className="ui radio checkbox">
      
            <input
            type= "checkbox"
            label='Neutral'
            value="Neutral"
            checked={this.state.checked}
            onChange={this.handleInputChange}
            />
            <label>Neutral</label>
            </div>
      </div>
                <div className="ui left pointing red basic label">
                Mandatory!
            </div>
      </div>
  </div>



    <div className="ui form">
    <div className="inline fields">
       <label>Lifetime:</label>
      <div className="field">
        <div className="ui radio checkbox">
          <input
            type= "checkbox"
            label='Evergreen'
            value="Evergreen"
            checked={this.state.checked}
            onChange={this.handleInputChange}
          />
        <label>Standard</label>
        </div>
      </div>
    <div className="field">
      <div className="ui radio checkbox">
         <input
            type= "checkbox"
            label='Evergreen'
            value="Evergreen"
            checked={this.state.checked}
            onChange={this.handleInputChange}
          />
        <label>Evergreen</label>
      </div>
    </div>
    </div>
</div>


      <Form.Field>

        <label>Thematic Focus:</label>
              <div className="ui pointing below red basic label">
              Mandatory!
            </div>

            <div role="combobox" aria-expanded="false" className="ui fluid multiple search selection dropdown">
            <input type="text" aria-autocomplete="list" tabIndex="0" value="thematic_focus" onChange={this.handleInputChange}/>
            <i aria-hidden="true" className="dropdown icon"></i>
             <div aria-multiselectable="true" role="listbox" className="menu transition">

          <select id="search-select" value={this.state.thematic_focus} onChange={(event) => {this.handleChange(event, "thematic_focus")}} >
            <option value="AL">Business</option>
            <option value="AK">Cars & Transportation</option>
            <option value="AZ">Catastrophe</option>
            <option value="AR">Culture</option>
            <option value="CA">Digital World</option>
            <option value="OH">Education</option>
            <option value="OK">Health</option>
            <option value="OR">History</option>
            <option value="PA">Human Rights</option>
            <option value="RI">Innovation</option>
            <option value="SC">Law and Justics</option>
            <option value="SD">Learning German</option>
            <option value="TN">Lifestyle</option>
            <option value="TX">Media</option>
            <option value="UT">Migration</option>
            <option value="VT">Nature and Environment</option>
            <option value="VA">Offbeat</option>
            <option value="WA">Politics</option>
            <option value="WV">Religion</option>
            <option value="WI">Science</option>
            <option value="WY">Society</option>
            <option value="W1">Sports</option>
            <option value="W2">Technology</option>
            <option value="W3">Travel</option>
          </select>
              </div>
              </div>

        </Form.Field>


      <Form.Field>
          <label>Topics:</label>
          
          <div role="listbox" aria-expanded="false" className="ui fluid pointing below red basic label"> Mandatory! </div>
         <select className="ui multiple search selection dropdown" value={this.state.topic} onChange={(event) => {this.handleChange(event, "topic")}} >
          <option value="A" >Source A</option>
          <option value="B" >Source B</option>
        </select>

      </Form.Field>
         
      
  <div className="ui hidden divider"></div>


      <Form.Field>
        <label>Location:</label>
        <select value={this.state.location} onChange={(event) => {this.handleChange(event, "location")}}>
          <option value="DE">Germany</option>
          <option value="GL">Global</option>
          <option value="AFRICA">Africa</option>
          <option value="ASIA">Asia</option>
          <option value="EUROPE">Europe</option>
          <option value="NORTHAMERICA">North America</option>
          <option value="MIDDLEEASTE">Middle East</option>
          <option value="LATINAMERICA">Latin America</option>
          <option value="OCEANIA">Oceania</option>
          <option value="ALGERIA">Algeria</option>
          <option value="AFGHANISTAN">Afghanistan</option>
          <option value="ANGOLA">Angola</option>
        </select>
      </Form.Field> 


<div className="ui hidden divider"></div>


       <Form.Field>
       <label>Content Type:</label>
              <div className="ui pointing below red basic label">
                Mandatory!
            </div>
        
           <select value={this.state.content} onChange={(event) => {this.handleChange(event, "content")}}>
          <option value="article">Article</option>
          <option value="DE">Audio</option>
          <option value="GL">Gallery</option>
          <option value="AFRICA">Video</option>
          <option value="ASIA">Infographic</option>
          <option value="EUROPE">Program element</option>
          <option value="NORTHAMERICA">Program</option>
          <option value="MIDDLEEASTE">Author</option>
          <option value="LATINAMERICA">Reference</option>
        </select>
        </Form.Field> 


      <Form.Field>
        <label>Regional reference:</label>
      <select value={this.state.regref} onChange={(event) => {this.handleChange(event, "regref")}}>
          <option value="DE">Deutschland</option>
          <option value="GL">Global</option>
          <option value="AFRICA">Africa</option>
          <option value="ASIA">Asia</option>
          <option value="EUROPE">Europe</option>
          <option value="NORTHAMERICA">North America</option>
          <option value="MIDDLEEASTE">Middle East</option>
          <option value="LATINAMERICA">Latin America</option>
          <option value="OCEANIA">Oceania</option>
          <option value="ALGERIA">Algeria</option>
          <option value="AFGHANISTAN">Afghanistan</option>
          <option value="ANGOLA">Angola</option>
        </select>
      </Form.Field>

        <Form.Field>
        <label>Genre:</label>

              <div className="ui pointing below red basic label">
                Mandatory!
            </div>
        <select value={this.state.genre} onChange={(event) => {this.handleChange(event, "genre")}}>
          <option value="Bericht">Bericht</option>
          <option value="DE">Documentary</option>
          <option value="GL">Erklärstück</option>
          <option value="AFRICA">Glosse/Satire</option>
          <option value="ASIA">Gottesdienst</option>
          <option value="EUROPE">Hintergrund</option>
          <option value="NORTHAMERICA">Interview</option>
          <option value="MIDDLEEASTE">Karikatur</option>
          <option value="LATINAMERICA">Kinderpgrogramm</option>
          <option value="OCEANIA">Kolumne</option>
          <option value="ALGERIA">Kommentar</option>
          <option value="AFGHANISTAN">Listicle</option>
          <option value="ANGOLA">Live-Berichterstattung</option>
          <option value="AFRICA">Long Read</option>
          <option value="ASIA">Magazin</option>
          <option value="EUROPE">Musiksendung</option>
          <option value="NORTHAMERICA">Nachricht</option>
          <option value="MIDDLEEASTE">Nachricht</option>
          <option value="LATINAMERICA">Presseschau</option>
          <option value="OCEANIA">Pressemitteilung</option>
          <option value="ALGERIA">Ratgeber</option>
          <option value="AFGHANISTAN">Reportage</option>
          <option value="ANGOLA">Service</option>
          <option value="ALGERIA">Talk</option>
          <option value="AFGHANISTAN">Unterhaltung</option>
          <option value="ANGOLA">Wortlaut</option>
        </select>
        </Form.Field> 


        <Form.Field>
        <label>Keywords:</label>
        <div className="ui left icon right labeled input">
      <input type="text" placeholder="Enter keywords" />
      <i aria-hidden="true"
      className="tags icon"></i>
      <div className="ui tag label label">Add Tag</div>
    </div>

      </Form.Field> 

    <a className="ui tag label">New <i className="delete icon"></i></a>
    <a className="ui red tag label">Upcoming <i className="delete icon"></i> </a>
    <a className="ui teal tag label">Featured <i className="delete icon"></i> </a>

<div className="ui hidden divider"></div>
<div className="ui hidden divider"></div>


        <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
        
        <Button type='preview' onClick={this.handlePreview}>Preview</Button>

      </Form>


        );
    }
}