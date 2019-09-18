import React from 'react';
import { Label, Form, Input, Button, Radio, Checkbox, Messages, Container, Divider, Dropdown, Header, Segment, Group, Table, Flag } from 'semantic-ui-react'
import { Articles } from '../imports/Article';



  const options = [
    { text: "This is a topic", value: 1 },
    { text: "This is some more topic", value: 2 },
    { text: "This is some mooooooore topic", value: 3 },
    { text: "This is some moooooooooooooooooore topic", value: 4 }
  ];



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
            _id:'',
            id:'',
            value: [],
            topics: [],
            text: ""
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
      event.preventDefault();
        Articles.insert({
            ptc: this.state.ptc,
            thematic_focus: this.state.thematic_focus,
            topic: this.state.topic,
            topics: this.state.topics,
            location: this.state.location,
            content: this.state.content,
            regref: this.state.regref,
            genre: this.state.genre,
            keywords: this.state.keywords,
            event_time: this.state.event_time,
            topstory: this.state.topstory,
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
            text: this.state.text,
            id: this.state.id,
            value: this.state.value
        });

        console.log('A title was submitted: ' + this.state.title);
        console.log('A desc was submitted: ' + this.state.desc);
        console.log('A author was submitted: ' + this.state.author);

          this.setState(s);
        
    }


    handleDelete(event) {
     
    }

    addTopic(event, type) {

    }


    render() {
        return (

        <Form>
        <Form.Field>
          <label>Topic:</label>
          <input mulitple="true" placeholder='topics' value={this.state.topics} onChange={(event) => {this.handleChange(event, "topics")}} />
        <Button type='submit' onClick={(event) => {this.addTopic(event, "topics")}}> add</Button>
         </Form.Field>

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



        <Form.Field onSubmit={this.handleSubmit}>
   
          <select multiple={true} x={['B', 'C']}>
            <option x="grapefruit">Pampelmuse</option>
            <option x="lime">Limette</option>
            <option x="coconut">Kokosnuss</option>
            <option x="mango">Mango</option>
          </select>
     
        <input  x={this.state.x} onChange={this.handleChange} type="submit" />
      </Form.Field>


<select className="fluid search dropdown" multiple="">
  <option value="">State</option>
  <option value="AL">Alabama</option>
  <option value="AK">Alaska</option>
  <option value="AZ">Arizona</option>
  <option value="AR">Arkansas</option>
  <option value="CA">California</option>
  <option value="CO">Colorado</option>
  <option value="CT">Connecticut</option>
  <option value="DE">Delaware</option>
</select>
                
   <div className="ui hidden divider"></div>
      <Form.Field>

   <div className="ui fluid multiple search selection dropdown">
            <input name="tags" type="hidden"/>
            <i className="dropdown icon"></i>
            <div className="default text">Tags</div>
            <div className="menu">
              <div className="item" data-value="angular">Angular</div>
                <div className="item" data-value="css">CSS</div>
                <div className="item" data-value="design">Graphic Design</div>
                <div className="item" data-value="ember">Ember</div>
            </div>
          </div>
           
          </Form.Field>
   <div className="ui hidden divider"></div>
   <Form.Field>
        <label>Topics1:</label>    
        <Dropdown ui fluid multiple search selection options={options} />
  
    <div className="ui hidden divider"></div>
  <Dropdown role="combobox" aria-expanded="true" className="ui fluid multiple search selection dropdown"/>


  </Form.Field> 

  <div className="ui hidden divider"></div>
   <Form.Field> 

    <input
      type="text"
      autoComplete="on"
      className="search"
      onChange={this.handleSubmit}
    />

    <div className="default text" role="alert" aria-live="polite" aria-atomic="true"></div>
    <i aria-hidden="true" className="dropdown icon"></i>
    <div aria-multiselectable="true" role="listbox" className="menu transition" onChange={this.handleSubmit}>
      <div
        role="option"
        aria-checked="false"
        aria-selected="true"
        className="selected item"
      >
        <span className="text">Alabama</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">Alaska</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">Arizona</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">Arkansas</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">California</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">Colorado</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">Connecticut</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">Delaware</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">Florida</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">Georgia</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">Hawaii</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">Idaho</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">Illinois</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">Indiana</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">Iowa</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">Kansas</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">Kentucky</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">Louisiana</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">Maine</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">Maryland</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">Massachusetts</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">Michigan</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">Minnesota</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">Mississippi</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">Missouri</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">Montana</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">Nebraska</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">Nevada</span>
      </div>
      <div
        role="option"
        aria-checked="false"
        aria-selected="false"
        className="item"
      >
        <span className="text">New Hampshire</span>
      </div>
  
  
  </div>
  </Form.Field>
  
    <div className="ui hidden divider"></div>
  



  <Form.Field>
  
   <label>Topics2:</label>
    <div role="listbox" aria-expanded="false" className="ui fluid pointing below red basic label"> Mandatory! </div>
  
    <div className="ui floating dropdown labeled icon button">
      <i className="filter icon"></i>
      <span className="text">Filter Posts</span>
      <div className="menu">
        <div className="ui icon search input">
          <i className="search icon"></i>
          <input   
              placeholder="Gesuchtes ..." 
              name="search"       
              type="text"
            />
      </div>
        <div className="header">
          <i className="tags icon"></i>
          Tag Label
        </div>
        <div className="item">
          <div className="ui red empty circular label"></div>
          Important
        </div>
        <div className="item">
          <div className="ui blue empty circular label"></div>
          Announcement
        </div>
        <div className="item">
          <div className="ui black empty circular label"></div>
          Cannot Fix
        </div>
        <div className="item">
          <div className="ui green empty circular label"></div>
          Discussion
        </div>
      </div>
    </div>
    </Form.Field>
  
  
    <div className="ui hidden divider"></div>

  <Form.Field>

        <label>Thematic Focus:</label>
              <div className="ui pointing below red basic label">
              Mandatory!
              </div>

            <div role="combobox" aria-expanded="false" className="ui fluid multiple search selection dropdown">

            <input type="text" aria-autocomplete="list" tabIndex="10" value=""/>
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
          <label>Topic:</label>
                <div className="ui pointing below red basic label">
                Mandatory!
            </div>
          <select value={this.state.topic} onChange={(event) => {this.handleChange(event, "topic")}} >
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

  <div className="ui hidden divider"></div>


      <Form.Field>
        <label>Location:</label>
        <select value={this.state.location} onChange={(event) => {this.handleChange(event, "location")}}>
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
          <option value="Documentary">Documentary</option>
          <option value="Erklärstück">Erklärstück</option>
          <option value="Glosse">Glosse/Satire</option>
          <option value="Gottesdienst">Gottesdienst</option>
          <option value="Hintergrund">Hintergrund</option>
          <option value="Interview">Interview</option>
          <option value="Karikatur">Karikatur</option>
          <option value="Kinderpgrogramm">Kinderpgrogramm</option>
          <option value="Kolumne">Kolumne</option>
          <option value="Kommentar">Kommentar</option>
          <option value="Listicle">Listicle</option>
          <option value="Berichterstattung">Live-Berichterstattung</option>
          <option value="LongRead">Long Read</option>
          <option value="Magazin">Magazin</option>
          <option value="Musiksendung">Musiksendung</option>
          <option value="Nachricht">Nachricht</option>
          <option value="Nachricht2">Nachricht2</option>
          <option value="Presseschau">Presseschau</option>
          <option value="Pressemitteilung">Pressemitteilung</option>
          <option value="Ratgeber">Ratgeber</option>
          <option value="Reportage">Reportage</option>
          <option value="Service">Service</option>
          <option value="Talk">Talk</option>
          <option value="Unterhaltung">Unterhaltung</option>
          <option value="Wortlaut">Wortlaut</option>
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