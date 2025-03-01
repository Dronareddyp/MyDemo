import React from 'react'

class Pagination extends React.Component {
    state = {
        pageNo: 1
    }

    onNextPage = () => {
        const { apiCallback, totalPages } = this.props
        this.setState(prev => {
            if (prev.pageNo < totalPages) {
                return {
                    pageNo: prev.pageNo + 1
                }
            }
            return prev
        }, () => {
            const { pageNo } = this.state
            apiCallback(pageNo)
        },
        )
    }

    onPrevPage=()=>{
        const {apiCallback} =this.props
        this.setState(
            prev=>{
                if(prev.pageNo>1){
                    return{
                        pageNo:prev.pageNo-1
                    }
                }
                return prev
            },
            ()=>{
                const {pageNo} = this.state
                apiCallback(pageNo)
            }
        )
    }

    render() {
        const {pageNo} =this.state
        const {totalPages}= this.props
        return (
            <div className="d-flex justify-content-center align-item-center">
                <button className="button" onClick={this.onPrevPage}>
                    Prev
                </button>
                <p className="page-no">{pageNo}</p>
                <button className="button" className="control-btn" onClick={this.onNextPage}>
                    Next
                </button>
            </div>
        )
    }
}
export default Pagination