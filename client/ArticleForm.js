import React from 'react';
import {Component} from 'react';
import { Label, Form, Input, Button, Radio, Checkbox, Messages, Container, Divider, Dropdown, Header, Segment, Group, Table, Flag } from 'semantic-ui-react'
import { Articles } from '../imports/Article';


import Search from './components/Search';
import ShortList from './components/ShortList';
import NamesList from './components/NamesList';


const regref = [
    { text: "Deutschland", value: "Deutschland" },
    { text: "Global", value: "GLO" },
    { text: "Africa", value: "AFR" },
    { text: "Asia", value: "Asia" },
    { text: "Europa", value: "EUR" },
    { text: "Northamerica", value: "NOA" },
    { text: "Middleast", value: "MIE" },
    { text: "Latinamerica", value: "LAA" },
    { text: "Oceania", value: "OCE" }
], selectedRegRef = ["Asia", "Deutschland"];


const lang = [
    { text: "Albanian", value: "AL" },
    { text: "Amharic", value: "AM" },
    { text: "Arabic", value: "AR" },
    { text: "Bengali", value: "BN" },
    { text: "Bosnian", value: "BS" },
    { text: "Bulgarian", value: "BG" },
    { text: "Chinese", value: "ZH" },
    { text: "Hrvatski", value: "HR" },
    { text: "Persian", value: "FA" },
    { text: "English", value: "EN" },
    { text: "French", value: "FR" },
    { text: "German", value: "DE" },
    { text: "Greek", value: "EL" },
    { text: "Hausa", value: "HA" },
    { text: "Hindi", value: "HI" },
    { text: "Indonesia", value: "ID" },
    { text: "Kiswahili", value: "KI" },
    { text: "Macedoninan", value: "MA" },
    { text: "Persian", value: "PS" },
    { text: "Dari", value: "DA" },
    { text: "Polski", value: "PO" },
    { text: "Portuguese", value: "PT" },
    { text: "Romanian", value: "RO" },
    { text: "Russian", value: "RU" },
    { text: "Serbian", value: "SE" },
    { text: "Spanish", value: "SP" },
    { text: "Turkish", value: "TU" },
    { text: "Ukrainian", value: "UK" },
    { text: "Urdu", value: "UR" },
], selectedLang = ["Albanian", "Dari"];

const location = [
    { text: "a", value: "DU" },
];


const thematic_focus = [
    { text: "Business", value: "Business" },
    { text: "Cars", value: "Cars" },
    { text: "Catastrophe", value: "Catastrophe" },
    { text: "Culture", value: "Culture" },
    { text: "Digital", value: "Digital" },
    { text: "Education", value: "Education" },
    { text: "Health", value: "Health" },
    { text: "History", value: "History" },
    { text: "Human", value: "Human" },
    { text: "Innovation", value: "Innovation" },
    { text: "Law", value: "Law" },
    { text: "Learning", value: "Learning" },
    { text: "Lifestyle", value: "Lifestyle" },
    { text: "Media", value: "Media" },
    { text: "Migration", value: "Migration" },
    { text: "Nature and Environment", value: "Nature" },
    { text: "Offbeat", value: "Offbeat" },
    { text: "Politics", value: "Politics" },
    { text: "Region", value: "Region" },
    { text: "Science", value: "Science" },
    { text: "Society", value: "Society" },
    { text: "Sports", value: "Sports" },
    { text: "Technology", value: "Technology" },
    { text: "Travel", value: "Travel" }
], selectedThemFoc = ["Politics", "Society"];

const keywords = [
    { text: "keyss", value: 1 },
    { text: "keywordsi", value: 2 },
    { text: "keywordsrophe", value: 3 },
    { text: "keydse", value: 4 },
    { text: "keywl", value: 5 },
    { text: "keywordsion", value: 6 },
    { text: "kerds", value: 7 },
    { text: "keywordsy", value: 8 },
    { text: "keywordsw", value: 9 },
    { text: "keywordion", value: 10 },
    { text: "keywordsa", value: 11 },
    { text: "keydsng", value: 12 },
    { text: "keywordsyle", value: 13 },
    { text: "kewords", value: 14 },
    { text: "keywordsion", value: 15 },
    { text: "keywords and Environment", value: 16 },
    { text: "keyrdst", value: 17 },
    { text: "keywordscs", value: 18 },
    { text: "keyworu", value: 19 },
    { text: "eywordse", value: 20 },
    { text: "keywordsy", value: 21 },
    { text: "ywordsui", value: 22 },
    { text: "keordslogy", value: 23 },
    { text: "krdst", value: 24 },
], selectedKeywords = [24, 12];

const genre = [
          { text:"Bericht", value:"Bericht"},
          { text:"Documentary", value:"Documentary"},
          { text:"Erklärstück", value:"Erklärstück"},
          { text:"Glosse", value:"Glosse/Satire"},
          { text:"Gottesdienst", value:"Gottesdienst"},
          { text:"Hintergrund", value:"Hintergrund"},
          { text:"Interview", value:"Interview"},
          { text:"Karikatur", value:"Karikatur"},
          { text:"Kinderpgrogramm", value:"Kinderpgrogramm"},
          { text:"Kolumne", value:"Kolumne"},
          { text:"Kommentar", value:"Kommentar"},
          { text:"Listicle", value:"Listicle"},
          { text:"Berichterstattung", value:"Live-Berichterstattung"},
          { text:"LongRead", value:"Long Read"},
          { text:"Magazin", value:"Magazin"},
          { text:"Musiksendung", value:"Musiksendung"},
          { text:"Nachricht", value:"Nachricht"},
          { text:"Presseschau", value:"Presseschau"},
          { text:"Pressemitteilung", value:"Pressemitteilung"},
          { text:"Ratgeber", value:"Ratgeber"},
          { text:"Reportage", value:"Reportage"},
          { text:"Service", value:"Service"},
          { text:"Talk", value:"Talk"},
          { text:"Unterhaltung", value:"Unterhaltung"},
          { text:"Wortlaut", value:"Wortlaut"},
], selectedGenre = ["Bericht", "Documentary"];

const content = [
          { text:"Article", value:"Article"},
          { text:"Audio", value:"Audio"},
          { text:"Gallery", value:"Gallery"},
          { text:"Video", value:"Video"},
          { text:"Infographic", value:"Infographic"},
          { text:"Program element", value:"Programe"},
          { text:"Program", value:"Program"},
          { text:"Author", value:"Author"},
          { text:"Reference", value:"Reference"},
], selectedContent= ["Article", "Audio"];




export default class ArticleForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            desc: '',
            author: '',
            date_published: '',
            lang: [
    { text: "Albanian", value: "AL" },
    { text: "Amharic", value: "AM" },
    { text: "Arabic", value: "AR" },
    { text: "Bengali", value: "BN" },
    { text: "Bosnian", value: "BS" },
    { text: "Bulgarian", value: "BG" },
    { text: "Chinese", value: "ZH" },
    { text: "Hrvatski", value: "HR" },
    { text: "Persian", value: "FA" },
    { text: "English", value: "EN" },
    { text: "French", value: "FR" },
    { text: "German", value: "DE" },
    { text: "Greek", value: "EL" },
    { text: "Hausa", value: "HA" },
    { text: "Hindi", value: "HI" },
    { text: "Indonesia", value: "ID" },
    { text: "Kiswahili", value: "KI" },
    { text: "Macedoninan", value: "MA" },
    { text: "Persian", value: "PS" },
    { text: "Dari", value: "DA" },
    { text: "Polski", value: "PO" },
    { text: "Portuguese", value: "PT" },
    { text: "Romanian", value: "RO" },
    { text: "Russian", value: "RU" },
    { text: "Serbian", value: "SE" },
    { text: "Spanish", value: "SP" },
    { text: "Turkish", value: "TU" },
    { text: "Ukrainian", value: "UK" },
    { text: "Urdu", value: "UR" },
], selectedLang: ["RO", "SP"],
            prio: '',
            lifetime: '',
            topstory: false,
            event_time: '',
            keywords: [],selectedKeywords:[24, 12],
            genre: [],selectedGenre:["Bericht", "Documentary"],
            regref: [], selectedRegRef:["Asia", "Deutschland"],
            content: [],selectedContent:["Article", "Audio"],
            location: [],
            topic: '',
            thematic_focus: [],selectedThemFoc:["Politics", "Society"],
            ptc: false,
            date_created: '',
            _id: '',
            filterText: '',
            favourites:[],
          };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.handlePrioChange = this.handlePrioChange.bind(this);
        this.handleLifetimeChange = this.handleLifetimeChange.bind(this);
        this.handleThematicFocus = this.handleThematicFocus.bind(this);
        this.handlelangChange = this.handlelangChange.bind(this);
        this.handlelocationChange = this.handlelocationChange.bind(this);
        this.handlePTCChange = this.handlePTCChange.bind(this);
        this.handleTopStoryChange = this.handleTopStoryChange.bind(this);
        this.handleContentTypeChange = this.handleContentTypeChange.bind(this);
        this.handleRegRefChange = this.handleRegRefChange.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this);
        this.handleKeywordChange = this.handleKeywordChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }


    // update filterText in state when user types 
    filterUpdate(value) {
        this.setState({
            filterText: value
        });
    }

    // add clicked name ID to the favourites array
    addFavourite(id) {
        const newSet = this.state.favourites.concat([id])
        this.setState({
            favourites: newSet
        })
    }

    // remove ID from the favourites array
    deleteFavourite(id) {
        const { favourites } = this.state
        const newList = [
            ...favourites.slice(0, id),
            ...favourites.slice(id + 1)
        ]
        this.setState({
            favourites: newList
        })
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


    handlePrioChange =      (e, { prio }) => this.setState({ prio })
    handleLifetimeChange =  (e, { lifetime }) => this.setState({ lifetime });
    handlelangChange =      (e, { lang }) => this.setState({ lang });
    handleKeywordChange =   (e, { keywords }) => this.setState({ keywords });
    handleThematicFocus =   (e, { thematic_focus }) => this.setState({ thematic_focus });
    handlePTCChange =       (e, { ptc }) => this.setState({ ptc });
    handlelocationChange =  (e, { location }) => this.setState({ location });
    handleTopStoryChange =  (e, { topstory }) => this.setState({ topstory });
    handleContentTypeChange = (e, { content }) => this.setState({ content });
    handleRegRefChange=     (e, { regref }) => this.setState({ regref });
    handleGenreChange=     (e, { genre }) => this.setState({ genre });

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
            _id: this.state._id,
            value: this.state.value,
            favourites: this.state.favourites,
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
        const hasSearch = this.state.filterText.length > 0;
        const { prio } = this.state;
        const { lifetime } = this.state;
        const { selectedLang } = this.state;
        const { selectedGenre} = this.state;
        const { selectedKeywords} = this.state;
        const { selectedThemFoc} = this.state;
        const { selectedContent}= this.state;
        const { selectedRegRef}= this.state;

        return (
          <Form>
        
          <Form.Field>
          <label>Title:</label>
          <Input
          label={{ icon: 'asterisk' }}
          labelPosition='right corner'  
          placeholder='Title...'
          value={this.state.title}
          onChange={(event) => {this.handleChange(event, "title")}}/>
          </Form.Field>

<div className="ui hidden divider"></div>

          <Form.Field>
          <label>Description:</label>
          <Input
          label={{ icon: 'asterisk' }}
          labelPosition='right corner'
          placeholder='Description...'
          value={this.state.description} onChange= {(event) => {this.handleChange(event, "desc")}} />
          </Form.Field>

<div className="ui hidden divider"></div>

          <Form.Field>
          <label>Author:</label>
          <Input 
          label={{ icon: 'asterisk' }}
          labelPosition='right corner'
          placeholder='First Name, Last Name...'
          value={this.state.author}
          onChange={(event) => {this.handleChange(event, "author")}} />
          </Form.Field>

  <div className="ui hidden divider"></div>

      <Form.Field>
        <label>Language:</label>
            <Form.Dropdown
            fluid selection multiple
            options={lang}
            onChange={this.handlelangChange}
            defaultValue={this.state.selectedLang}
          />
      </Form.Field> 


<div className="ui hidden divider"></div>

          <Form.Field>
          <label>Publishing date + time:</label>
          <div className="ui calendar" id="example1">
           <div className="ui input left icon">
            <i className="calendar icon"></i>
          <Input
          type="date"
          placeholder='Publishing Date...'
          value={this.state.date_created}
          onChange={(event) => {this.handleChange(event, "date_created")}} />   
          </div>
          </div>

          </Form.Field>

<div className="ui hidden divider"></div>

          <Form.Field>
          <label>Eventdate:</label>
          <div className="ui calendar" id="example2">
           <div className="ui input left icon">
            <i className="calendar icon"></i>
          <Input
          type="date"
          placeholder='Eventdate...'
          value={this.state.event_time}
          onChange={(event) => {this.handleChange(event, "event_time")}} />   
          </div>
          </div>

          </Form.Field>

<div className="ui hidden divider"></div>

        <Form.Group inline>
          <label>Priority:</label>
          <Form.Radio
            label='Breaking'
            prio='breaking'
            checked={prio === 'breaking'}
            onChange={this.handlePrioChange}
          />
          <Form.Radio
            label='Exclusive'
            prio='exclusive'
            checked={prio === 'exclusive'}
            onChange={this.handlePrioChange}
          />
          <Form.Radio
            label='High'
            prio='high'
            checked={prio === 'high'}
            onChange={this.handlePrioChange}
          />
          <Form.Radio
            label='Neutral'
            prio='neutral'
            checked={prio === 'neutral'}
            onChange={this.handlePrioChange}
          />
        </Form.Group>
  

  <div className="ui hidden divider"></div>

  
        <Form.Group inline>
          <label>Lifetime:</label>
          <Form.Radio
            label='Evergreen'
            lifetime='evergreen'
            checked={lifetime === 'evergreen'}
            onChange={this.handleLifetimeChange}
          />
          <Form.Radio
            label='Standard'
            lifetime='standard'
            checked={lifetime === 'standard'}
            onChange={this.handleLifetimeChange}
          />
          
        </Form.Group>
         

  <div className="ui hidden divider"></div>

          <Form.Group inline>
          <label>Top Story:</label>
        <Checkbox
            checked={this.state.topstory}
            onChange={this.handleTopStoryChange}
          />
        </Form.Group>

  <div className="ui hidden divider"></div>

      <Form.Group inline>
         <label>Profile Topic Content:</label>
          <Checkbox
            checked={this.state.ptc}
            onChange={this.handlePTCChange}
          />
        </Form.Group>

  <div className="ui hidden divider"></div>

      <Form.Field>
        <label>Thematic Focus:</label>
            <Form.Dropdown
            fluid selection multiple
            options={thematic_focus}
            onChange={this.handleThematicFocus}
            defaultValue={this.state.selectedThemFoc}
            />
      </Form.Field>      
           
  <div className="ui hidden divider"></div>

        <Form.Field>
        <label>Keywords:</label>
            <Form.Dropdown
            fluid selection multiple
            options={keywords}
            onChange={this.handleKeywordChange}
            defaultValue={this.state.selectedKeywords}
          />
      </Form.Field>      
           
  <div className="ui hidden divider"></div>


       <Form.Field>
        <label>Topic:</label>
        <Search
            filterVal={this.state.filterText}
            filterUpdate={this.filterUpdate.bind(this)}
          /> 
          <ShortList 
            data={this.props.data} 
            favourites={this.state.favourites}
            deleteFavourite={this.deleteFavourite.bind(this)}
          />
          <NamesList 
            data={this.props.data}
            filter={this.state.filterText}
            favourites={this.state.favourites}
            addFavourite={this.addFavourite.bind(this)}
          />
          {/* 
            Show only if user has typed in search.
            To reset the input field, we pass an 
            empty value to the filterUpdate method
          */}
          {hasSearch &&
            <Button
              onClick={this.filterUpdate.bind(this, '')}>
              Delete
            </Button>
          }
        </Form.Field>

  <div className="ui hidden divider"></div>

      <Form.Field>
        <label>Location:</label>
          <Form.Dropdown
            fluid selection
            options={location}
            onChange={this.handlelocationChange}
          />        
      </Form.Field> 


<div className="ui hidden divider"></div>


       <Form.Field>
       <label>Content Type:</label>
          <Form.Dropdown
            fluid selection multiple
            options={content}
            onChange={this.handleContentTypeChange}
            defaultValue={this.state.selectedContent}
          />  
        </Form.Field> 

<div className="ui hidden divider"></div>

      <Form.Field>
        <label>Regional reference:</label>
          <Form.Dropdown
            fluid selection multiple
            options={regref}
            onChange={this.handleRegRefChange}
            defaultValue={this.state.selectedRegRef}
          />        
      </Form.Field>


<div className="ui hidden divider"></div>

      <Form.Field>
          <label>Genre:</label>
          <Form.Dropdown
            fluid selection multiple
            options={genre}
            onChange={this.handleGenreChange}
            defaultValue = {this.state.selectedGenre}
          /> 
        </Form.Field> 

<div className="ui hidden divider"></div>
<div className="ui hidden divider"></div>


        <Button type='submit' onClick={this.handleSubmit}>Submit</Button>



        <Button type='preview' onClick={this.handlePreview}>Preview Startpage</Button>

        <Button type='preview' onClick={this.handlePreview}>Preview CoCo Wirtschaft</Button>

        <Button type='preview' onClick={this.handlePreview}>Preview Coco Kultur</Button>

        <Button type='preview' onClick={this.handlePreview}>Preview Profilthema</Button>

      </Form>

        );
    }
}